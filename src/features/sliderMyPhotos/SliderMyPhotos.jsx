import { useDispatch, useSelector } from "react-redux";

export default function SliderMyPhotos() {

    const dispatch = useDispatch()
    const { images } = useSelector((state)=>state.images)

    return (

        <>
            <h1>jejej</h1>
        </>
    );

}
