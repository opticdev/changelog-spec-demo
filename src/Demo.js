import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';
import FactList from './FactView';
import { buildState, defaultFacts } from './domain/aggregate';
import Slider from '@material-ui/core/Slider';
import { MarkdownRender } from './Markdown';
import { factsWhy, factsWhy2, questionsWhy, specSpecCopy } from './Copy';
import { Questions } from './domain/questions';
import { Question } from './Question';
import { ChangelogQuestions } from './domain/changelog_questions';

export function Demo() {
  const [mainOffset, setMainOffset] = useState(defaultFacts.length - 3);
  const [n1Offset, setN1Offset] = useState(defaultFacts.length - 1);

  const mainState = Questions(buildState([], mainOffset));
  const n1OffsetState = buildState([], n1Offset);

  const changelogQuestions = ChangelogQuestions(
    buildState([], mainOffset),
    n1OffsetState
  );

  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid
        xs={12}
        md={5}
        item
        style={{
          borderRight: '1px solid #e2e2e2',
          padding: 15,
          backgroundColor: 'white',
          overflow: 'scroll',
          height: '100vh',
        }}
      >
        <Typography variant="h5">Facts</Typography>

        <MarkdownRender source={factsWhy} />

        <Typography
          variant="subtitle1"
          style={{ marginTop: 10, marginBottom: 5, fontSize: 15 }}
        >
          Here's a very basic example of a changelog spec for describing the
          shape of JSON:
        </Typography>

        <FactList
          facts={defaultFacts}
          mainOffset={mainOffset}
          n1Offset={n1Offset}
        />

        <Typography
          variant="subtitle1"
          style={{ marginTop: 20, marginBottom: 15, fontSize: 15 }}
        >
          These sliders control the offset of facts included in two specs
          (Version N) and (Version N+1):
        </Typography>

        <Typography id="discrete-slider" gutterBottom variant="caption">
          Version N
        </Typography>
        <Slider
          value={mainOffset}
          onChangeCommitted={(e, value) => {
            setMainOffset(value);
            if (value > n1Offset) {
              setN1Offset(value);
            }
          }}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={defaultFacts.length}
        />

        <Typography id="discrete-slider" gutterBottom variant="caption">
          Version N+1
        </Typography>
        <Slider
          value={n1Offset}
          onChangeCommitted={(e, value) => {
            if (value < mainOffset) {
              setN1Offset(mainOffset);
            } else {
              setN1Offset(value);
            }
          }}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={defaultFacts.length}
        />

        <MarkdownRender source={factsWhy2} />
      </Grid>
      <Grid
        xs={12}
        md={7}
        item
        style={{
          backgroundColor: '#f5f5f5',
          padding: 15,
          overflow: 'scroll',
          height: '100vh',
        }}
      >
        <Typography variant="h5">Questions</Typography>
        <MarkdownRender source={questionsWhy} />

        <Typography variant="h6" style={{ marginTop: 15 }}>
          Core Questions
        </Typography>
        <Question
          title="What fields does an object have?"
          inputs={[
            {
              preview: `spec.whatFieldsDoesAnObjectHave('root')`,
              result: () => mainState.whatFieldsDoesAnObjectHave('root'),
            },
          ]}
        />
        <Question
          title="What are the required fields of an object?"
          inputs={[
            {
              preview: `spec.whatAreTheRequiredFieldsOfAnObject('root')`,
              result: () =>
                mainState.whatAreTheRequiredFieldsOfAnObject('root'),
            },
          ]}
        />
        <Question
          title="What are the optional fields of an object?"
          inputs={[
            {
              preview: `spec.whatAreTheOptionalFieldsOfAnObject('root')`,
              result: () =>
                mainState.whatAreTheOptionalFieldsOfAnObject('root'),
            },
          ]}
        />
        <Question
          title="Is a field required?"
          inputs={[
            {
              preview: `spec.isAFieldRequired('field2')`,
              result: () => mainState.isAFieldRequired('field2'),
            },
          ]}
        />
        <Question
          title="What type is expected for field?"
          inputs={[
            {
              preview: `spec.whatTypeIsExpectedForAField('root')`,
              result: () => mainState.whatTypeIsExpectedForAField('field2'),
            },
          ]}
        />

        <Divider style={{ marginTop: 20, marginBottom: 20 }} />

        <Typography variant="h6" style={{ marginTop: 15 }}>
          Validation Questions{' '}
          <i style={{ fontWeight: 100 }}>Changelog Spec + Outside Data</i>
        </Typography>
        <Question
          title="Does this input JSON match the expected shape?"
          inputs={(() => {
            const json1 = {
              name: 'Philadelphia Phillies',
              founded_year: '1883',
              mascot_name: 'Phillie Phanatic',
              city: 'Philadelphia',
              website: 'https://www.mlb.com/phillies',
            };

            const json2 = {
              founded_year: '1883',
              website: 'https://www.mlb.com/phillies',
            };

            const json3 = {
              name: 'Philadelphia Phillies',
              founded_year: 1883,
              mascot_name: 'Phillie Phanatic',
              city: 'Philadelphia',
            };

            return [json1, json2, json3].map((json) => ({
              preview: `spec.doesThisShapeMatch('root', ${JSON.stringify(
                json,
                null,
                2
              )})`,
              result: () => mainState.doesThisShapeMatch('root', json),
            }));
          })()}
        />

        <Typography variant="h6" style={{ marginTop: 15 }}>
          Change Management Questions{' '}
          <i style={{ fontWeight: 100 }}>Changelog Spec + Outside Data</i>
        </Typography>
        <MarkdownRender source={specSpecCopy} />
        <Question
          title="Are the specs equal?"
          inputs={[
            {
              preview: `changelog.areTheseSpecsEqual(n, n1)`,
              result: () => changelogQuestions.areTheseSpecsEqual(),
            },
          ]}
        />
        <Question
          title="What changed?"
          inputs={[
            {
              preview: `changelog.whatHasChanged(n, n1)`,
              result: () => changelogQuestions.whatHasChanged(),
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
