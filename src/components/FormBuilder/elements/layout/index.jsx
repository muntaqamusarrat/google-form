import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import { formEl } from "../../constants";

const Layout = ({item, handleEltype, children}) => {
    return (
        <>
            <Paper elevation={1}>
                <Box sx={{textAlign: "center"}}>
                    <DragIndicatorIcon
                        sx={{ transform: "rotate(-90deg)", cursor: "all-scroll" }}
                    />
                </Box>
                <Box sx={{p: 3}}>
                    <Grid container spacing={1}> 
                        <Grid item xs={9}>
                            {children}
                        </Grid>
                        <Grid item={3}>
                            <FormControl fullWidth>
                                <InputLabel id="el-type-label">Type</InputLabel>
                                <Select
                                    labelId="el-type-label"
                                    id="el-type"
                                    label="Type"
                                    value={item.type}
                                    onChange={(e) => handleEltype(item.id, e.target.value)}
                                >
                                    {formEl && formEl.map((item, key)=> {
                                        <MenuItem 
                                            key={key} value={el.value}
                                        >
                                            {el.label}
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid> 
                </Box>
                <FormGroup row sx={{alignItems: "center"}}>
                    <Tooltip title="Delete Element" aria-label="delete-element">
                        <IconButton 
                            aria-label="delete-element"
                            onClick={() => deleteEl()}
                            sx= {{ml: 2}}
                        >
                            <DeleteOutlineOutlinedIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Duplicate Element" aria-label="duplicate-element">
                        <IconButton 
                            aria-label="duplicate-element"
                            onClick={() => duplicateEl()}
                            sx= {{ml: 2}}
                        >
                            <DeleteOutlineOutlinedIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                </FormGroup>
            </Paper>
        </>
    )
}

export default Layout

