import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const Header = ({title, description, setTitle, setDescription}) => {
    return (
        <>
            <Box sx={{mb: 3}}>
                <Paper elevation={2} sx={{p: 3, borderTop: "8px solid #673AB7"}}>
                    <TextField 
                        defaultValue={title}
                        onBlur={(e)=> setTitle(e.target.value)}
                        variant="standard"
                        placeholder="Form Title"
                        name="title"
                        sx={{mb: 3}}
                        fullwidth
                    /> 
                    <TextField 
                        defaultValue={description}
                        onBlur={(e)=> setDescription(e.target.value)}
                        variant="standard"
                        placeholder="Form Description"
                        name="descrption"
                        sx={{mb: 3}}
                        fullwidth
                    /> 
                </Paper>
            </Box>
        </>
    )
}

export default Header