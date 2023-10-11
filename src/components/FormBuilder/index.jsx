import { useState } from "react";
import Header from "./Header";

const FormBuilder = () => {
    const [title, setTitle] = useState("Untitled Form")
    const [description, setDescription] = useState("")
    return(
        <Header 
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
        />
    )
}

export default FormBuilder