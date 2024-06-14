import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useLoading } from './LoadingContext';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const { isLoading, setIsLoading } = useLoading();
    const [localLoading, setLocalLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
        setLocalLoading(false);
      }, 1000); // Adjust the timeout as needed

      return () => clearTimeout(timer);
    }, [setIsLoading]);

    if (localLoading || isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
