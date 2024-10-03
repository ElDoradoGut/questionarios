import { useState } from "react"
import { Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const [list, setList] = useState([1]);

    const addListElement = () => {
        const nList = list;
        nList.push(nList.length + 1);
        setList([...nList]);
    }

    const removeListElement = () => {
        const nList = list;
        nList.pop();
        setList([...nList]);
    }


    return (
        <Container>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <hr></hr>
            <h3>Lista Dinamica</h3>
            <button onClick={() => addListElement()}>Add</button>
            <button onClick={() => removeListElement()}>Remove</button>
            <Form>
                {
                    list.map((value, i) => (
                        <FormGroup>
                            <FormLabel>Elemento {value}</FormLabel>
                            <FormControl name={`element ${i}`} className="mb-3"/>
                        </FormGroup>
                    ))
                }
            </Form>

        </Container>
    )
}