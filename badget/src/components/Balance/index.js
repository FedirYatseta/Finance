import { Wrapper } from "../Transaction/style";

const Balance = ({ balance }) => {
    return (
        <div>
            <Wrapper value={balance}>
                Balance: {balance}
            </Wrapper>

        </div>
    )
}

export default Balance;