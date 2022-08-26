import { RouteComponentProps } from 'react-router';

import {
  HelloIamge,
  HelloPageContainer,
  HelloText,
  ItWorksText,
  CodeArea,
} from './style';

interface MatchParams {
  person: string;
}

interface HelloProps extends RouteComponentProps<MatchParams> {}

export default function Hello(props: HelloProps) {
  return (
    <HelloPageContainer>
      <HelloIamge src={'https://www.pngkit.com/png/detail/187-1871263_yugioh-hair-png-yu-gi-oh-png.png'} alt="Welcome To Aki's Boilerplate!" />
      <ItWorksText>Hello, {props.match.params.person}! It works!</ItWorksText>
      <HelloText>
        Edit <CodeArea>src/index.tsx</CodeArea> to start!
      </HelloText>
    </HelloPageContainer>
  );
}
