import Insight from '@features/insight/Insight';
import { ThemeProvider } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import appTheme from './themes/appTheme';
import { Layout } from './layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
        <Layout>
          <Insight />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
