import * as React from 'react';
import { Box, Stack, Typography, Avatar, Link, Divider } from '@mui/material';
import {
  AccountPreview,
  AccountPopoverFooter,
  SignOutButton,
} from '@toolpad/core/Account';

import { useSession } from '@toolpad/core/useSession';

export function UserOrg() {
  const session = useSession();
  if (!session?.user) {
    return <Typography>No user session available</Typography>;
  }


  return (
    <Stack>
      <AccountPreview variant="expanded" />
      <Divider />
      <AccountPopoverFooter>
        <SignOutButton />
      </AccountPopoverFooter>
    </Stack>
  );
}