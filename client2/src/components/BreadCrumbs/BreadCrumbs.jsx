import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import './BreadCrumbs.scss'

const BasicBreadcrumbs = () => {
    const navigate = useNavigate();
    const { pathname } = window.location;
    const pathNames = pathname.split("/").filter(x => x);

    return (
        <div className={'breadCrumbs'} role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {pathNames.length > 0 ? (
                    <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
                        Home
                    </Link>
                ) : (
                    <Typography>Home</Typography>
                )}

                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                    return isLast ? (
                        <Typography className={'capitalize'} key={name}>{name}</Typography>
                    ) : (
                        <Link
                            key={name}
                            underline="hover"
                            color="inherit"
                            text
                            onClick={() => navigate(routeTo)}
                        >
                            {capitalizedName}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default BasicBreadcrumbs;