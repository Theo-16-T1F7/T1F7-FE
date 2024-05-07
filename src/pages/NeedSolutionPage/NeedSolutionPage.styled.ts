import styled from 'styled-components';

export const Subheading = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: 100px; /* 여백 값 조정 가능 */
  font-weight: 900;
  font-size: 20px;
`;
export const SubheadingText = styled.div`
  margin-left: 10px;
`;
export const SolutionList = styled.div`
  border-top: 2px solid ${(props) => props.theme.dividerColor};
  border-bottom: 1px solid ${(props) => props.theme.dividerColor};
`;

export const SolutionListTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #424242;
  margin-top: 10px;
  margin-left: 30px;
`;
export const SolutionListCreateAt = styled.div`
  font-size: 10px;
  color: #959595;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #070707;
    font-size: 1.2rem;
  }
  ul.pagination li.active a {
    color: #070707;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #ea464a;
  }
`;
