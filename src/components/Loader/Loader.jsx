import { ThreeDots } from  'react-loader-spinner'
import { LoaderContainer } from './Loader.styled';

export const PageLoader = () => {
    return (
        <>
            <LoaderContainer>
                <ThreeDots color="gray" height={100} width={100} ariaLabel='loading' />
            </LoaderContainer>
        </>
    );
};