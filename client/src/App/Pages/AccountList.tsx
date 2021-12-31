import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Box,
} from '@material-ui/core';
import React from 'react';
import { AccountListItem } from './AccountListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAssetContext } from './AssetContext';

export function AccountList({ accounts }) {
  const { selectedAddress } = useAssetContext();

  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='overline' id={'address'}>
            NOTICE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display='block'>
            <Typography paragraph>
              This choicecoin Grant for women app uses the{' '}
              <Link href='https://testnet.algoexplorer.io/'>
                Algorand testnet
              </Link>{' '}
              for all addresses and transactions.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      {accounts &&
        accounts.map((account, index) => {
          return (
            <Accordion
              defaultExpanded={
                selectedAddress && selectedAddress === account.address
                  ? true
                  : index === accounts.length - 1
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography variant='overline' id={'address'}>
                  {account.address}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccountListItem account={account} index={index} />
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
