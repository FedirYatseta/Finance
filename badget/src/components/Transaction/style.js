import styled from 'styled-components'


export const Wrapper = styled.div`
        display: flex;
        background: ${({ value }) => value < 0 ? '#FB0930' : '#0DDB2E'};
        border-radius: 4px;
        padding: 5px;
        margin: 5px 10px;
`;


export const Element = styled.div`
        background: ${({ value }) => value < 0 ? '#FB0930' : '#0DDB2E'};
        border-radius: 4px;
        padding: 5px;
        min-width: 150px;
`;