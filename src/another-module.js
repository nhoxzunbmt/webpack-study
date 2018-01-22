  import { cube } from './math.js';

  import _ from 'lodash';
  if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
  }


  function component() {
      var element = document.createElement('pre');

      element.innerHTML = [
          'Hello webpack A`11212!',
          '5 cubed is equal to2342 ' + cube(5)
      ].join('\n\n');

      return element;
  }
  console.log(
      _.join(['aaa', 'vv', '23!'], ' ')
  );
  document.body.appendChild(component());