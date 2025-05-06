import { useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import useDecodeUrl from '../../hooks/url/useDecodeUrl';

const Decode = () => {
    document.title="Decode | URL SHORTER"
    const { shortCode } = useParams<{ shortCode: string }>();
    const { handleDecodeUrl } = useDecodeUrl();
    console.log(shortCode)

    useLayoutEffect(() => {
        if(shortCode){
            const response = handleDecodeUrl({
            shortCode: shortCode,
            });

            response.then((data) => {
                window.location.href = data.data.longUrl
            })
        }
    }, [shortCode]);
  
    return (
        <></>
    );
};

export default Decode;
