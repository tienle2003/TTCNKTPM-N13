import routes from "../../constants/routes"
import Button from "../Button"

export default function Logo() {
    return (
        <div className="">
            <Button to={routes.home}>
                <span className="flex items-end">
                    <h1 className="text-3xl text-colorPrimary font-extrabold">PhongTro</h1>
                    <h3 className="text-lg text-colorCcc font-semibold">.com</h3>
                </span>
                <span className="text-xs text-colorDark text-black">Kênh thông tin phòng trọ số 1 Việt Nam</span>
            </Button>
        </div>
    )
}