import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

export function MarkdownRender({ source, style, noHeadings }) {
  return (
    <div style={style}>
      <ReactMarkdown
        source={source}
        renderers={{
          heading: ({ level, children }) =>
            !noHeadings ? (
              <Typography
                color="primary"
                variant={`h${level}`}
                style={{ fontWeight: 300, marginBottom: 3 }}
              >
                {children}
              </Typography>
            ) : null,
          paragraph: ({ children }) => (
            <Typography
              variant="body2"
              style={{ fontWeight: 200, marginTop: 11, whiteSpace: 'pre-wrap' }}
            >
              {children}
            </Typography>
          ),
          list: ({ children }) => {
            return <ul style={{ paddingLeft: 20 }}>{children}</ul>;
          },
          listItem: ({ children }) => (
            <li style={{ paddingLeft: 0 }}>
              <Typography
                variant="body2"
                style={{
                  paddingLeft: 5,
                  paddingRight: 5,
                  marginTop: 11,
                  fontWeight: 200,
                }}
              >
                {children}
              </Typography>
            </li>
          ),
        }}
      />
    </div>
  );
}
