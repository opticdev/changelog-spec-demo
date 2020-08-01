import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function CodeTick({ children, style }) {
  return (
    <span
      style={{
        backgroundColor: '#d4d4d4',
        color: '#268aff',
        fontWeight: 600,
        padding: 4,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function displayFact(fact) {
  if (fact.AddShape) {
    const properties = fact.AddShape;
    return (
      <span>
        Add Shape <CodeTick>{properties.shapeId}</CodeTick> as{' '}
        <CodeTick>{properties.type}</CodeTick>
      </span>
    );
  } else if (fact.AddField) {
    const properties = fact.AddField;
    return (
      <span>
        Add Field <CodeTick>{properties.name}</CodeTick> as{' '}
        <CodeTick>{properties.type}</CodeTick> with id {properties.fieldId}
      </span>
    );
  } else if (fact.MakeFieldOptional) {
    const properties = fact.MakeFieldOptional;
    return (
      <span>
        Make Field <CodeTick>{properties.fieldId}</CodeTick> optional
      </span>
    );
  } else if (fact.MakeFieldRequired) {
    const properties = fact.MakeFieldRequired;
    return (
      <span>
        Make Field <CodeTick>{properties.fieldId}</CodeTick> required
      </span>
    );
  } else if (fact.ChangeFieldType) {
    const properties = fact.ChangeFieldType;
    return (
      <span>
        Change Field <CodeTick>{properties.fieldId}</CodeTick> to{' '}
        <CodeTick>{properties.type}</CodeTick>
      </span>
    );
  }
}

export default function FactList({ facts, mainOffset, n1Offset }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {facts.map((fact, index) => (
          <ListItem
            style={{ padding: 5 }}
            disabled={!(index < mainOffset)}
            divider={true}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {displayFact(fact)}
              <ListItemSecondaryAction>
                <CodeTick
                  style={{
                    marginRight: 10,
                    opacity: index < mainOffset ? 1 : 0,
                  }}
                >
                  N
                </CodeTick>
                <CodeTick style={{ opacity: index < n1Offset ? 1 : 0 }}>
                  N+1
                </CodeTick>
              </ListItemSecondaryAction>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
