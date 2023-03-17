import styled from 'styled-components';
import { Breadcrumb as AntBreadcrumb } from 'antd';

export const BaseBreadcrumb = styled(AntBreadcrumb)`
  &.ant-breadcrumb {
    li:last-child {
      .ant-breadcrumb-link {
        color: var(--text-main-color);
      }
    }
  }
`;
