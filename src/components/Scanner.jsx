
import { Alert, AlertTitle, Container } from '@mui/material';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Oval } from 'react-loader-spinner';
import { unmountComponentAtNode } from 'react-dom';

const Scanner = () => {
    const [display, setDisplay] = useState(false);
    const [displayCamera, setDisplayCamera] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState([]);

    const user = localStorage.getItem("name");
    const id = localStorage.getItem("id");

    async function register(url) {
        try {
            setDisplayCamera(false)
            setLoading(true)
            const result = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "name": user,
                    "id": id
                })
            });
            const res = await result.json();
            if (res.status === 200) {
                setLoading(false)
                setMessage(["success", res.message])
                setDisplay(true)
            } else if (res.status === 409) {
                setLoading(false)
                setMessage(["warning", res.message])
                setDisplay(true)
            } else if (res.status === 401) {
                setLoading(false)
                setMessage(["error", "Server error! Try again"])
                setDisplay(true)
            }
            console.log(res.message);
        } catch (err) {
            setLoading(false)
            setMessage(["error", "Error! Check your internet"])
            setDisplay(true)
            console.log(err);
        }
    }

    const style = (display) ? { display: "initial" } : { display: "none" };
    const styleCamera = (displayCamera) ? { display: "initial" } : { display: "none" };

    return (
        <div>
            {(loading) ?
                <Oval
                    height={150}
                    width={150}
                    color="#4fa94d"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor='#4fa94d'
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                    wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                />
                :
                <Container>
                    <Alert severity={message[0]} style={style}>
                        <AlertTitle>{message[0]}</AlertTitle>
                        <strong>{message[1]}</strong>
                    </Alert>
                </Container>
            }
            <div style={styleCamera}>
                <QrReader className="is-rounded"
                    constraints={{
                        facingMode: "environment"
                    }}
                    onResult={(result, error) => {
                        if (!!result) {
                            register(result?.text);
                            unmountComponentAtNode(Scanner)
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%', height: "100%", borderRadius: "50%" }}
                />
            </div>
        </div>
    );
};

export default Scanner;
