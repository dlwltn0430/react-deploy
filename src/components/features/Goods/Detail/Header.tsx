import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';

<<<<<<< HEAD
import { useAddWishlist } from '@/api/hooks/useAddWishlist';
import { useDeleteWishlistItem } from '@/api/hooks/useDeleteWishlistItem';
=======
>>>>>>> upstream/dlwltn0430
import type { ProductDetailRequestParams } from '@/api/hooks/useGetProductDetail';
import { useGetProductDetail } from '@/api/hooks/useGetProductDetail';
import { breakpoints } from '@/styles/variants';

type Props = ProductDetailRequestParams;

export const GoodsDetailHeader = ({ productId }: Props) => {
  const { data: detail } = useGetProductDetail({ productId });
<<<<<<< HEAD

  const [isFavorite, setIsFavorite] = useState(false);
  const addWishlist = useAddWishlist();
  const deleteWishlistItem = useDeleteWishlistItem();

  const handleFavoriteClick = () => {
    const id = parseInt(productId);

    if (isFavorite) {
      deleteWishlistItem.mutate(id, {
        onSuccess: () => {
          setIsFavorite(false);
          alert('관심 등록 해제');
        },
        onError: () => {
          alert('관심 등록 해제 중 오류가 발생했습니다.');
        },
      });
    } else {
      addWishlist.mutate(
        { product_id: id },
        {
          onSuccess: () => {
            setIsFavorite(true);
            alert('관심 등록 완료');
          },
          onError: () => {
            alert('관심 등록 중 오류가 발생했습니다.');
          },
        },
      );
    }
=======
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    alert(isFavorite ? '관심 등록 해제' : '관심 등록 완료');
>>>>>>> upstream/dlwltn0430
  };

  return (
    <Wrapper>
<<<<<<< HEAD
      <GoodsImage src={detail.image_url} alt={detail.name} />
=======
      <GoodsImage src={detail.imageUrl} alt={detail.name} />
>>>>>>> upstream/dlwltn0430
      <InfoWrapper>
        <Title>{detail.name}</Title>
        <Price>{detail.price}원</Price>
        <Divider color="#f5f5f5" />
        <Notice>카톡 친구가 아니어도 선물 코드로 선물 할 수 있어요!</Notice>
        <Divider color="#f5f5f5" />
        <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick}>
          {isFavorite ? '❤️' : '🖤 '}
        </FavoriteButton>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
`;

const GoodsImage = styled.img`
  width: 100%;
  max-width: 450px;
`;

const InfoWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding-left: 24px;
  }
`;

const Title = styled.h2`
  padding-top: 24px;
  font-size: 24px;
  line-height: 33px;
  color: #111;
  font-weight: 400;
  word-break: break-all;
`;

const Price = styled.p`
  width: 100%;
  min-height: 120px;
  padding-top: 16px;
  font-size: 30px;
  font-weight: 400;
  line-height: 52px;
  color: #222;
`;

const Notice = styled.p`
  padding: 24px 12px;
  font-size: 14px;
  font-weight: 700;
  color: #111;
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  margin-top: 16px;
  padding: 8px 16px;
  color: ${({ isFavorite }) => (isFavorite ? 'red' : '#555')};
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  cursor: pointer;
`;
