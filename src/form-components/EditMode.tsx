import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [isEdit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function changeEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function changeStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-mode"
                label="Edit?"
                checked={isEdit}
                onChange={changeEdit}
            />
            {isEdit ?
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={changeName}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={changeStudent}
                    />
                </Form.Group>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
