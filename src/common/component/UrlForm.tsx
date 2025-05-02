import { useState } from 'react';
import { formConfig } from '../../utils/helpers';
import { Button, Form, Input } from 'antd';

export default function UrlForm() {
  const [autoPaste, setAutoPaste] = useState(true);

  return (
    <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3 text-gradient">
            Shorten Your Loooong Links :)
        </h2>
        <p className="text-gray-400 mb-6">
            Url Shorter is an efficient and easy-to-use URL shortening service...
        </p>

        <div className="flex items-center max-w-2xl mx-auto bg-[#1A1D24] px-4 py-2 rounded-full shadow-md">
        <Form
            {...formConfig}
            className='flex-1'
            onFinish={(e) => {
            }}
        >
            <Form.Item
              name="url"
              label={null}
              rules={[{ required: true, message: "Url is required" }]}
              className='m-0'
            >
              <Input placeholder="Name" className="bg-transparent outline-none border-none text-white px-2 hover:bg-transparent" />
            </Form.Item>
        </Form>
        <Button
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium font-[satoshi-medium] border-none"
        htmlType="submit"
        >
        Shorten Now!
        </Button>
      </div>

      <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-400">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={autoPaste}
            onChange={() => setAutoPaste(!autoPaste)}
          />
          Auto Paste from Clipboard
        </label>
      </div>
    </div>
  );
}
