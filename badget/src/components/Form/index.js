import { useState } from "react";
import { WrapperForm, Input, Textarea, Button, Row } from "./style";
import PropTypes from 'prop-types';

const Form = (props) => {

    const [form, setForm] = useState({
        value: '',
        comment: '',
        date: new Date().toISOString().substring(0, 10),

    })


    const onSubmit = (e) => {
        e.preventDefault();
        props.onChange(form)
        setForm({
            ...form,
            value: '',
            comment: ''
        })
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <WrapperForm >
            <form onSubmit={onSubmit}>
                <Row>
                    <Input name="value"
                        type='number'
                        onChange={onChange}
                        value={form.value}
                        placeholder="Sum" />
                    <Input name="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                    />
                    <Textarea name="comment"
                        type='text'
                        onChange={onChange}
                        value={form.comment}
                    />
                </Row>



                <Button>Save</Button>
            </form>

        </WrapperForm>
    )
}

Form.propTypes = {
    onChange: PropTypes.func
}


export default Form