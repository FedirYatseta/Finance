import styled from 'styled-components'


export const WrapperForm = styled.div`
        display: flex;
        align-item: center;
        justify-content: left;
        background: #3c3c3c;
        border-radius: 4px;
        border: 2px solid #343434;
        padding: 5px;
        margin: 5px 10px;
`;

export const Input = styled.input`
        height:20px;
        align-item: center;
        justify-content: center;
        border-radius: 4px;
        border: 2px solid #343434;
        padding: 5px;
        margin: 5px 10px;
`;
Input.displayName = 'Input';

export const Textarea = styled.textarea`
        height:20px;
        align-item: center;
        justify-content: center;
        border: 2px solid #343434;
        border-radius: 4px;
        padding: 5px;
        margin: 5px 10px;
`;
Textarea.displayName = 'Comment';


export const Button = styled.button`
        width:150px;
        box-sizing: border-box;
        align-item: center;
        border: 2px solid #dbdbdb;
        justify-content: center;
        border-radius: 4px;
        padding: 5px;
        margin: 5px 10px;
        cursor: pointer;
`;

export const Row = styled.div`
        display:flex;
        flex: 0 1 50%;
        flex-wrap: wrap;

`;


