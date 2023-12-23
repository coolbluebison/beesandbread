import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ButtonGroup from '@mui/joy/ButtonGroup';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {

  // Build a grid, using material ui
  // Grid should have 2 columns
  // Each columns should have equal width and total equal length too

  // Left columns of the Grid
  // Should include 4 different rows, span or stacks
  // First stack should have "Product Name/Large"
  // Second stack should have "Seller Name/Farm/Smaller/Should be differentiated or highlighted"
  // Third stack should have "Unit size / 10 ounces"
  // Fourth stack should include Pricing, separated by padding from other things above and below
  // Fifth stack should have 2 buttons (#1 Add to Cart, #2 Favorite It (should be circular heart button) )
  // Sixth stack should have a p, which should say order now to deliver [next week]
  // Seventh stack, should includea a box or a container which will show each and every one of the product's qualities in separate buttons 

  // Right columns of the Grid
  // A tool which displays the product images, 
  // One main image card and choices of other images related to the product to right of it in small boxes 

  let list_of_qualities = ["Organic", "Grass-Fed", "Certified Gluten-Free", "Vegeterian", "Certified Kosher", "Paleo", "Ketogenic", "Non-GMO Project Verified"]

  let images = ["https://picsum.photos/id/237/200/300", "https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/200/300?grayscale"] 
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    
    <Box sx={{ flexGrow: 1 }}>
    
      <Grid container spacing={6}>
        
        {/* This is the LEFT column of the grid */}
        <Grid item xs={6} id="item-container-left">
            
            <Stack spacing={3} id=''>
                
                {/* Second stack/span - which shows the Seller and the rating of the Product*/}
                <span>
                  {/* First stack/span - which shows the name of the company */}
                  <h1 className="text-4xl font-bold">Grass Fed Himalayan Salted Ghee</h1>
                  <span><h2 className="text-lg font-bold">Baran's Farm</h2></span>
                  <span><h2 className="text-lg">Rating stars go here</h2></span>

                  {/* Third stack/span - which shows the Unit Size*/}
                  <span><h2 className="text-lg">9.5 oz jar</h2></span>
                </span>

                {/* Fourth stack should include Pricing, separated by padding from other things above and below */}
                <span>
                  <h2 className="text-lg font-bold">$12.49</h2>
                  <h2 className="text-lg">-23%</h2>
                </span>
                
                
                {/* // Fifth stack should have 2 buttons (#1 Add to Cart, #2 Favorite It (should be circular heart button) ) */}
                <span>
                  <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                    <Button size="lg" variant={'soft'} color="warning">
                      Add to Cart
                    </Button>

                    <IconButton
                      sx={{
                        "--IconButton-size": "50px"
                      }}
                    >
                      <FavoriteBorder variant={'soft'} color='warning' />
                    </IconButton>
                  
                  </ButtonGroup>          
                </span>

                {/* Sixth stack should have a p, which should say order now to deliver [next week] */}
                <span>
                  <h3>Order now to receive it by Next Sunday</h3>
                </span>

                {/* // Seventh stack, should includea a box or a container which will show each and every one of the product's qualities in separate buttons  */}
                <span><h2 className="text-2xl font-bold">Qualities</h2></span>
                <span>
                    {list_of_qualities.map((quality, index) => (
                      < Button style={{ marginRight: '12px', marginBottom: '10px' }} color='success' variant='soft' size='md' key={index}>{quality}</Button>
                    ))}
                </span>

            </Stack>

            <Stack spacing={2} id=''>


            </Stack>
        
        </Grid>


        {/* This is the RIGHT column of the grid */}
        <Grid item xs={6} id="item-container-right">

          <Grid container spacing={6}>

          
            <Grid item xs={10} id="item-container-right-left">
              <div className="product-images-container" style={{ width: '100%', height: '100%', marginTop: '50px', boxSizing: 'border-box' }}>
                      <div>
                        <img src={selectedImage} alt="Main Product" />
                      </div>
              </div>
            </Grid>

            <Grid item xs={2} id="item-container-right-right">
              <div className="product-images-container">
                      <div className="image-selection" style={{ marginTop: '50px' }}>
                        {images.map((image, index) => (
                          <div key={index} style={{ marginRight: '12px', marginBottom: '10px' }} onClick={() => setSelectedImage(image)}>
                            <img src={image} alt={`Product ${index + 1}`} />
                          </div>
                        ))}
                      </div>
              </div>
            </Grid>
          </Grid>


        </Grid>
      
      </Grid>
    
    </Box>


  );
}