// @ts-nocheck
import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import classNames from '../../../next-docs/utils/classNames';
import { Header } from '../private/Header';
import { Props } from '../types/TableChartProps';
import ChartIcons from './ChartIcons';
import { Loader } from './private/Loader';
import { Panel } from './private/Panel';
import { Count, Table, Cell, TableItem, Value } from './private/Table';

const CustomLoader = styled(Loader)({});

const Container: React.FC = ({ children }) => {
  return (
    <div className={classNames('flex grow h-full overflow-auto')}>
      {children}
    </div>
  );
};

// const Container = styled.div<{ isActive: boolean }>(({ theme, isActive }) => ({
//   display: 'flex',
//   flexGrow: 1,
//   height: '100%',
//   overflow: 'auto',
//   ...(isActive && {
//     'tr *': {
//       color: theme.colorNew.goten,
//     },
//     [`${CustomLoader} p`]: {
//       color: theme.colorNew.goten,
//     },
//     [`${Count}`]: {
//       color: theme.colorNew.goten,
//     },
//   }),
// }));

const TableChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.TopPlayers />,
  isActive = false,
  loaderText = 'No data',
}) => {
  const isLoading = !data.length;
  const firstCellRef = useRef(null);

  return (
    <Panel
      isUpdating={isUpdating}
      isActive={isActive}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header isActive={isActive} icon={icon} title={title} filter={filter} />
        {isLoading ? (
          <CustomLoader
            icon={<ChartIcons.BarChartLoading />}
            title={loaderText}
            color={isActive ? 'gohan.100' : 'trunks.100'}
          />
        ) : (
          <Container isActive={isActive}>
            <Table>
              {data.map((item, index) => (
                // eslint-disable-next-line
                <Transition
                  nodeRef={firstCellRef}
                  key={index}
                  in={true}
                  appear
                  timeout={100 * index}
                >
                  {(state) => (
                    <>
                      <Cell
                        ref={firstCellRef}
                        opacity={state === 'entered' ? 1 : 0}
                      >
                        <Count>{index + 1}</Count>
                      </Cell>
                      <Cell wide opacity={state === 'entered' ? 1 : 0}>
                        <TableItem>{item.label}</TableItem>
                      </Cell>
                      <Cell align="right" opacity={state === 'entered' ? 1 : 0}>
                        <Value>{item.value}</Value>
                      </Cell>
                    </>
                  )}
                </Transition>
              ))}
            </Table>
          </Container>
        )}
      </>
    </Panel>
  );
};

export default TableChart;
