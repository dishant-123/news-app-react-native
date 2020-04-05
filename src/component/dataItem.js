import { View } from 'react-native'
import React from 'react';
import {ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import moment from 'moment'
export default function DataItem({data,onClick})
{
    return (
        <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri : data.urlToImage!=null ? data.urlToImage : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJkAZgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAIBAgQDBQYEBQMFAAAAAAECEQADBBIhMQVBURMiYXGBBjKRobHwFELB8TNygtHhIzRSB2JzksL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAgEQEBAAICAgIDAAAAAAAAAAAAAQIRAyESMSIyExRB/9oADAMBAAIRAxEAPwDxCiiigKKWnWlDuAZigRVLbCrK4G5CtKwdtd6tWERGHYiWHePe3Xp51qYdsLj3u4bD2BnKM6uWPIagg1S5LzFljhqxlu57LRu53qve4e6GEOY9CIrZ/FWxh1s3WN23c3t3DraYRIHTWflU64HsrGHsO83ezLan8upH6Hyqvlpbwlco6MhhhBptaPEbQR8pXSdG6HpWeRBrpLtzs0SiiipQSloooFooooCreDVAjXH5MBHWqlXMGFuqbbQFjXrUZelsfbpcFZtfhmxFtFUsABmiPKs63cfC48YhMI1u4AQQoJXUa10nsp7L3uI2rb3bzfhA3dU8/GK9IT2S4a2ES02GUrG+xrP5tU4tzdeC4ub95riLDEyygb/5qa7jLxe7duTmuJl290RAj0r2S77JcLwzFlsDTmY0rkfaPhWFVz2aBdNaj8q369k3t59i8Sbpk76z8dKpTNavFuGnCjOnuN8qyoitGNlnTHnLL2SilpKsqKKKKBaKKKAqfCmM42kaHoagrewfCFPDrWM7Vy4dCyZe7lZgo1661XKyTtfDG29PXvZRUwfCrC3stsKgJkxFdSvEcCVC28XaLgSVzCYrgMbgHJW9dtvibZACpmIVB1IG/nWbwPhjX+NBLmAsWBccjKl0s2UfmnoelZI33+R6PjHw72muNcUWyAS2bSDXn3tJj8AcQbNi/bJAg98Vb/6nWLvDbOEs4Rj+Ge0BlnmK4S5gStlL/Y4W4txARpL5p1BpMZUZZ2TUUfaDPbIYHuEnyBrDroeJ4RbXDGyyAWBC9DWZxLBJhFXIXkGGzczEyK0cdmtMnJhd2qFFBorq4lopKKBaKKKAFdp7OBuI+zV/C2GHbWT3hOpAOZfn9K4urfDeI4nhl/t8I+VipVgdQwPIiq54+UdOLPwu6999msTaxWAsuYbMgIresYezZbMttA7HSABXmfsBxZTas2iYU6L4Gu54jjcMLb2u0vHEshVVstlZfGeVZPXTdPlpz/8A1SS5nwOhyqpBFYXD1s2bK3Hto6R7rCo/bDFYvia28QGxKrhnFkpd2bugkg86ofjbQwJto2qrqOlRZU7k9s32iuDFXls2AFD3FAXlvNYfH73ft4ctmdBLnx5U/iONcP2ltsrg9wxtWOSWMsSSdya0ceHqsnLye5CUUUV2ZxRRRQLRSUUC1JYt9rdVBpJ3qKa0uG4ZlcXnGmU5R10oN/gLPhrIxKDLbW+UZSPc0AB/vXpNjDYS/grt1Uu3O2bPcyMQD5wa4j2WtI+GxOGYGM+cBo1Vh+9bGBxfEuAh0tI16w/ulQSV8xWTk+z0OLrGVV4vf4fi89q1bxC4nDtlGa8zADrE/WuX4kEwyEg99tDO5rWucaZcRevJgLnaXD3y9sjN8ayhauYm+cRiht7q8hUTq9mWVz6YWLVw4W5oSkx03/tVKtXHMHxTtyXSqN21+Zd9yK1Y+mHP7VBRRRVlRRRRQFPt2nuNCLP6VdtcOhS94g9FB38KvIq20MKVVTBK6AHrQVMLgVXv3jPOAPCav28wAJDTPSOXP5fGhbeZbilpZTJnUdCR8SaVRcOkBnnSBv8A51+lQLnDsa3D8dbxAB7IiHEe8p56c5+9a7pMRbu2lZGzIwkMNjXnrIsEhBIMDLpJ571e4Lj3wZOEZs9ppKayAa48uG+408HLr41ucXtpcbNmzECABXP8TuiynZWoNwiuptWVfCPi7uVUVZrisbfzXHKAgttO5Oh9Onx8TXPjw3duvNn4xkMdY1NKABJE61KmHuBc9wKF01O1OWwznMZyBhB5nXp41qYVa/hswDJ+/wB6VTZGQwwg1r9noBykjp960r2bdwNCgjQxE7z/AGoMair93h5LE2WGWdjRUjWJ94CSoJ92fEaetR7HNlkA7wTJ+z8qjW5/N4iOX70qkmScwWPd5/e1VEtpxZKPbEFdcrbH/B1pwu3u0z3LoN9mLEgaLI+mnwNJA/IxMrCiRKinBjmGsaTIEwfD+3nQOTLcJypDiIJ61Hcc5reVlF0aKG30PT1qdrDPaa6inKpjOi6DURv4fpRbZADdvsqiCNRzMydeccvGh6aeO4pevcPsYRVKopOdAJlgJgnwIrAu31W4GchoM6ga6bVOuIa9dREUGwAQzlSAR4c422j1qk6qMcXgPlZZ15xrHr9KSSTpbLK5XdOQM/ede4JaP+URofCY0+xYyEbwfyjkCQMvwkk+lWbWGc3lnUq2XKTvl1MepqYWlt2xDodJIjSDJJ+fwk86lVX7G27ARAVQoAOrSBEdZkfSpfw8gs7oBuJGk6npzEUpVV7hYjMkELrOmp8wc/w2qYkJez5Mk6rD6jmNPVRvyqBAbVvAPmuXFymVAnxj/wCTRTTdXNouYDrrpAj+/wDVRQY9tySVLHUTI5a1OHOWIGYHSf1POqPaHNJM6yfA1ZsqMgiACBq2x+5qRZUu6hUkDXccuVOBJOZTGbXaST9j501c6g5Qfd/5aeRNPQ/6ke8YnUQIA186gPN+/wDh3w1ohcO5lkKiQJ1ExtIqFsKwvNdxAzkSQNwACQYjyj1qdIKgnOSWJhRJiNf2qRo7zAXCqkbKNTvPx+tAZikBirFWbOvXKQY0/wC4/KlCJnUJbjVVLAxqssT86hR2bKDaZgWgEEagSWgzuTFP7e5aRYQZpY5gRq7aSPACpE5u2wFLq4EkknQa6xJ8I/c1HfuIxt952uMDvAIGm4j19AOVVu0v4jEZ4yrGWRyUCTPyPiYqxFsoWZZEZTr7un1EZfEtUCU3EAc5coA0DGCpgfKAo6amq1zELaZ5ct46zOo9Nz/7Ci7cZVJRmy5ZJJ1J1nT0NZuLvuXIbWNweu1AYi82IuNOs6xt970lV0cEd740VKTWYcufhzq3hLg7Exy61QJ3AFT4JiJjkwohpoMy6e84jMRsP1O9TK6Fg7KF1JXL06iq9tgcqs3kVEb8o9fpUts6xnXw5x9zPpUJKEW1BlApUjQbnrUl1dFXUAArO7bH0qB4RBDRlBMQGBHL5nSpltlmOmdG1yDYaH9T8qIKr9pbZXBbPoDuBqeRqTMGYmYIAMkmJ0plqZtkMhLHRtNdDz5/YpxVhnmSFG3vSNwDG3LagUKNLYVWQrl1MAE5NY5c6czF7bFQodZzsYg8z88tR3S4zrc2AiVGx1+B0FNJ7KSpELpHUDw/p58ooKuJdbaAqMwGgM9P2086yrzDc7nYdKnxF0lzJj9PCql7ZYqQ9G05+lFMT3aKBrGD4GrGDI79Vn9341Pg9mqRoLGYzM8/P7NTLcUZpJ10EbGPD4fCq52H8/6CnN/DT+r6VVKfdyXBlRMxpAiBvU1n/SNkmfekTAPLlv4VWT+Gv/kSpr3+3X76UQnTtAASxCsw0GsfPxHOkNv8hgAltYykb/t41Hh/4KeZ+lOu/wC5ufzL9DUhGuF+62kknby0HxNU79xuxKL1BMffnTrv+2v+Yp2L/heg+hqBmO2Y6ydahunu1Mdm8z9ar3fdHnVgitS0xdqWg//Z' }} />
              </Left>
              <Body>
                <Text  numberOfLines={2}>{data.title}</Text>
                <Text  note numberOfLines={2}>{data.description}</Text>
                <View style = {{flex:1, flexDirection:'row'}}>
                    <Text note>{data.source.name}</Text>
                    <Text note>{moment(data.publishedAt || momemt.now()).fromNow()}</Text>
              </View>
              </Body>
              <Right>
                <Button transparent onPress = {()=> {return onClick(data)}}>
                  <Text>View</Text>
                </Button>
              </Right>
              
            </ListItem>
    )
}