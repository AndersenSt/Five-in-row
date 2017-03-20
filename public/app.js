import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'display': 'flex',
    'justifyContent': 'center',
    'transform': 'translateY(10%)'
  },
  'row': {
    'display': 'flex',
    'flexFlow': 'row nowrap'
  },
  'tile-empty': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  'tile-empty:hover': {
    'cursor': 'pointer'
  },
  'tile-full': {
    'display': 'inline-flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  'size': {
    'color': 'darkblue',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'h1': {
    'color': '#1A237E',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#1A237E',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'win': {
    'display': 'inline-flex',
    'flexDirection': 'column',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#1A237E',
    'justifyContent': 'center',
    'alignItems': 'center',
    'boxSizing': 'border-box',
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 230 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'loser': {
    'display': 'inline-flex',
    'flexDirection': 'column',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#1A237E',
    'justifyContent': 'center',
    'alignItems': 'center',
    'boxSizing': 'border-box',
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 230 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'win': {
    'backgroundColor': '#CCFF90'
  },
  'loser': {
    'backgroundColor': '#FFCCBC'
  },
  'page-game-over': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'textAlign': 'center'
  },
  'page-start-game': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'textAlign': 'center'
  },
  'game-page': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'button': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  }
});
