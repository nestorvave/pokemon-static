import { Layout } from "@/components/layouts";
import { FavoritePokemnos } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Grid } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";
import { useState, useEffect } from "react";

const FavoritePage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="My favorite pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons.map((id: number) => (
            <FavoritePokemnos id={id} key={id} />
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritePage;
