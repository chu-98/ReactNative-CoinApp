import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { history, info } from "../apis/api";
import { Icon } from "./Coin";

const Container = styled.View``;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Icon
          source={{
            url: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
      ),
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );
  return <Container />;
};
export default Detail;
