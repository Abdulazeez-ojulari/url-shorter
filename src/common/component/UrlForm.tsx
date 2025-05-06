import { useState } from 'react';
import { formConfig, ROUTES } from '../../utils/helpers';
import { Button, Form, FormProps, Input } from 'antd';
import { Apirequest } from '../../model/client/request';
import useEncodeUrl from '../../hooks/url/useEncodeUrl';
import { useToast } from '../../hooks/useToast';
import CopyIcon from '../../assets/icons/CopyIcon';
import { useNavigate } from 'react-router-dom';
import { Apiresponse } from '../../model/client/response';

export default function UrlForm() {
  const [shortUrl, setShortUrl] = useState('');
  const [encodedUrl, setEncodedUrl] = useState<Apiresponse.EncodeUrlResponseType>();

  const { handleEncodeUrl, handleEncodeUrlResponse } = useEncodeUrl();
  const  { success } = useToast()
  const navigate = useNavigate();

    async function copyToClipBoard(text: string){
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(text).then(() => {
                success('Copied')
            });
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const onFinish: FormProps<Apirequest.EncodeUrlRequestType>["onFinish"] = (
        values
    ) => {
        const response = handleEncodeUrl({
        longUrl: values.longUrl,
        });

        response.then((data) => {
            setShortUrl(data.data.shortUrl)
            setEncodedUrl(data.data)
        })
    };

  return (
    <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3 text-gradient">
            Shorten Your Loooong Links :)
        </h2>
        <p className="text-gray-400 mb-6">
            Url Shorter is an efficient and easy-to-use URL shortening service...
        </p>
        {!shortUrl &&
        <Form
            {...formConfig}
            className="flex items-center max-w-2xl mx-auto bg-[#1A1D24] px-4 py-2 rounded-full shadow-md"
            onFinish={onFinish}
        >
            <div className='flex-1'>
                <Form.Item
                name="longUrl"
                label={null}
                rules={[{ required: true, message: "Url is required" }]}
                className='m-0'
                >
                <Input placeholder="Name" className="bg-transparent outline-none border-none text-white px-2 hover:bg-transparent" />
                </Form.Item>
            </div>
            <Button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium font-[satoshi-medium] border-none"
            htmlType="submit"
            loading={handleEncodeUrlResponse.isLoading}
            >
            Shorten Now!
            </Button>
        </Form> 
        }

        {shortUrl && 
            <>
            <div className="flex justify-center w-[315px] mx-auto gap-3 bg-[#2a2a2a] px-4 py-2 rounded-md shadow-md my-5">
                <span className="text-lg font-medium">{shortUrl}</span>
                <div
                className="text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition text-sm"
                onClick={() => copyToClipBoard(shortUrl)}
                >
                    <CopyIcon />
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <Button 
                className="bg-gray-700 text-white hover:bg-gray-600 px-4 py-2 rounded-md border-none"
                onClick={() => {
                    navigate(ROUTES.STATS, { state: encodedUrl });
                }}
                >View Stats</Button>
                <Button 
                className="bg-gray-700 text-white hover:bg-gray-600 px-4 py-2 rounded-md border-none"
                onClick={() => {
                    setShortUrl("")
                }}
                >Shorten another link</Button>
            </div>
            </>
        }


    </div>
  );
}
