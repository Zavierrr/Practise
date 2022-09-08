import styled from 'styled-components';
import {px2rem} from '@/assets/global-style'

export const Wrapper = styled.div`
  flex: 2;
  background-color: #fafafa;
  height: 100vh;
  padding-top: 3rem;
  div{
    width: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: ${px2rem(10)};
    padding: ${px2rem(10)} 0;
    font-size: ${px2rem(12)};
    color: #999;
    span{
      display: inline-block;
    }
    i{
      font-size: ${px2rem(16)};
    }
  }
`