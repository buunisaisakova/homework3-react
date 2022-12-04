import classes from "./classComponent.module.css"

function ClassComponent(){
        return(
            <>
                <ul>
                    <li className={classes.classComponent}>name: Anna</li>
                    <li className={classes.classComponent}>age:19</li>
                </ul>
            </>
        )

}
export default ClassComponent;