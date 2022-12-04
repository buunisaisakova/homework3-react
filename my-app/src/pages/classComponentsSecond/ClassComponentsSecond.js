import classes from "./classComponentSecond.module.css"

function ClassComponentSecond(){
        return(
            <>
                <ul>
                    <li className={classes.classComponentSecond}>name: Anna</li>
                    <li className={classes.classComponentSecond}>age:19</li>
                </ul>
            </>
        )

}
export default ClassComponentSecond;