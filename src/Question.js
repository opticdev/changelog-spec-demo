import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import { MarkdownRender } from './Markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Question(props) {
  const classes = useStyles();
  const { title, code, inputs } = props;

  return (
    <div style={{ marginTop: 18 }}>
      <Typography variant="subtitle1">{title}</Typography>
      {inputs.map((i, index) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
            }}
          >
            <Typography
              variant="subtitle2"
              style={{
                marginTop: 5,
                paddingTop: 7,
                color: '#6e6e6e',
                fontSize: 10,
                paddingRight: 5,
                borderRight: '1px solid #e2e2e2',
              }}
            >
              Example {index + 1}
            </Typography>
            <div style={{ flex: 1, paddingLeft: 10 }}>
              <MarkdownRender
                style={{
                  backgroundColor: '#e2e2e2',
                }}
                source={'```\n' + i.preview + '\n```'}
              />
              <Typography variant="caption">Result:</Typography>
              <MarkdownRender
                style={{
                  backgroundColor: '#e2e2e2',
                }}
                source={'```\n' + JSON.stringify(i.result(), null, 2) + '\n```'}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
