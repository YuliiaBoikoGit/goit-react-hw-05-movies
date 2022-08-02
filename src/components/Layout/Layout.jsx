import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Nav, Link } from "./Layout.styled";
import { PageLoader } from "components/Loader/Loader";

export const Layout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </Nav>
            </Header>
            
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};