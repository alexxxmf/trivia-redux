import styled from 'styled-components/native';
import { Colors } from '../../theme';

export const SMainContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.blue};
`;

export const SMainContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.blue};
`;
