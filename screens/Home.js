import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components";
import { coins } from "../apis/api";
import { BLACK_COLOR } from "../assets/colors/colors";
import Coin from "../components/Coin";

const Container = styled.View`
  flex: 1;
  background-color: ${BLACK_COLOR};
`;
const Loader = styled.View`
  flex: 1;
  background-color: ${BLACK_COLOR};
  justify-content: center;
  align-items: center;
`;
const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter(coin => coin.rank != 0 && coin.is_active && !coin.is_new)
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  }
  return (
    <Container>
      <List
        data={cleanData}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ItemSeparatorComponent={() => <View style={{ height: 9 }} />}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Coin index={index} id={item.id} symbol={item.symbol} />
        )}
      />
    </Container>
  );
};

export default Home;
