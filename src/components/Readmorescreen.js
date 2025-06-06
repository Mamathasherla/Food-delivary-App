import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const articles = [
  {
    title: 'How to prepare a delicious gluten free sushi',
    date: 'January 3, 2023',
    image: '/images/Mask group (10).png',
  },
  {
    title: 'Exclusive baking lessons from the pastry king',
    date: 'January 3, 2023',
    image: '/images/Mask group (11).png',
  },
  {
    title: 'How to prepare the perfect fries in an air fryer',
    date: 'January 3, 2023',
    image: '/images/Mask group (12).png',
  },
  {
    title: 'How to prepare delicious chicken tenders',
    date: 'January 3, 2023',
    image: '/images/Mask group (13).png',
  },
];

const ReadMoreArticles = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f7', py: 8, px: { xs: 2, md: 10 }, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={600} gutterBottom>
        Read More Articles
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: '#4a4a4a', mb: 6 }}>
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </Typography>

      {/* Flex container for horizontal scroll */}
      <Box
  sx={{
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
    flexWrap: 'nowrap', // no wrapping
  }}
>
  {articles.map((article, index) => (
    <Card
      key={index}
      sx={{
        flex: '1 1 22%',  // roughly 4 cards in a row with some gap
        borderRadius: 4,
        boxShadow: 3,
        textAlign: 'left',
        minWidth: 0, // allow shrinking
      }}
    >
      <CardMedia
        component="img"
        height="140" // reduce image height proportionally
        image={article.image}
        alt={article.title}
        sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
      />
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {article.date}
        </Typography>
        <Typography variant="subtitle1" fontWeight={600} mt={1}>
          {article.title}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>
</Box>
  );
};

export default ReadMoreArticles;
