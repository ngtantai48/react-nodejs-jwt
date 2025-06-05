import { CrownOutlined } from "@ant-design/icons";
import { Result } from "antd";

const HomePage = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Result
                icon={<CrownOutlined />}
                title="JSON Web Token (Node.JS/React) - createdBy @ngtantai48"
            />
        </div>
    )
}

export default HomePage;