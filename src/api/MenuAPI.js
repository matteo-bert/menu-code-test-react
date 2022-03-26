import { gql } from "@apollo/client";

export default gql`
  {
    menu {
      starters {
        id
        name
        price
      }
      mains {
        id
        name
        price
      }
      desserts {
        id
        name
        price
      }
    }
  }
`;
