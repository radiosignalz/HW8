
import {Grid} from "@material-ui/core";
import {Card} from "react-bootstrap";

export const List = ({list}) => {
    return (
        <Card>
                {list?.map(({id,thumbnailUrl, title})=>(
                    <Grid  >
                        <img  src={thumbnailUrl} key={id}/>
                        <Card>{title}</Card>
                    </Grid>
                ))}
        </Card>
    );
};
