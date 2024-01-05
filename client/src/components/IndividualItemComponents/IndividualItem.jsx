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


const ProductPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 160,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
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
    
    <div className='pt-[15rem] bg-white z-40 text-black'>
      <Box sx={{ flexGrow: 1 }} className="mx-60" >
            
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
                        < Button style={{ marginRight: '12px', marginBottom: '10px', borderRadius: '20px' }} color='success' variant='soft' size='md' key={index}>{quality}</Button>
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

      {/* Build a section that has the same boundaries as the main product display section.
      Especially in terms of the left and right padding. 
      The section will show alternative products that are very similar to the one that the user just viewed 
      Products need to be in litte boxes, like item cards
      Inside the item card, the layout should be as following
      Top to bottom grid, the grid should have 2 sections
      Top grid section should occupy 60%, bottom section 40%
      Inside the top section, another grid - left to Right
      Left grid should occupy 25%, Right grid should occupy 75% 
      Left grid should show the main picture of the product
      Right grid - inside a span - a span name of the product, a span product size unit 
      Below these - inside a span showing discount, then price */}


      <Box className="mx-60 py-10">
        <span><h2 className="text-xl font-bold">Other Related Products</h2></span>
        <br></br> 
        
        <Stack direction="row" spacing={2}>
          <ProductPaper variant="elevation" elevation={2} >
            {/* Top portion  */}
            <Stack container spacing={1}>
              <Stack direction='row'>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img src={"https://img.thrivemarket.com/store/full/8/6/861555000125-1_1_1.jpg"} alt={`Product`} />
                  </Grid>
                  <Grid item xs={9} alignContent='left'>

                    <Stack spacing={1}>
                      <span >                  
                        <h3 className="text-sm font-bold text-left">Fourth & Heart, Grass Fed Ghee, Garlic</h3>
                        <h2 className="text-xs text-left">9 oz jar</h2>
                      </span>
                      <span >
                        <p className="text-xs font-bold text-left">$12.49</p>
                        <p className="text-xs text-left">-23%</p>
                      </span>
                    </Stack>
                  
                  </Grid>
                </Grid>
              </Stack> 
              {/* Bottom portion */}
              <Stack direction='row'>
                <Button size="sm" variant={'soft'} color="warning">
                  Add to Cart
                </Button>
              </Stack>
            </Stack> 
          </ProductPaper>
        </Stack>      
      </Box>

      <br>
      </br>


      {/* A section divider / or opener that open the way for the producer to be introduced */}
      <Box className="bg-pink-200"> 
        <Stack>
          <span>
            <h2 className="text-lg font-bold text-center">Why it is great</h2> 
          </span>
        </Stack>
      </Box>

      {/* This is just an example page about a producer. Each producer should have a different page dedicated to them maybe edited by the team but provided by the producer. */}
      <Box className="bg-pink-100 p-6">
        <Stack spacing={4} className="items-center">

          <h2 className="text-2xl font-bold text-center">Green Pasture Ranch</h2>
          
          <img
            className="rounded-lg"
            src="https://media.istockphoto.com/id/1332281472/photo/shot-of-a-young-woman-working-with-cows-on-a-farm.jpg?s=2048x2048&w=is&k=20&c=wndgYapuDOu9y2HEktVvw12gxvqFVbjROW0Ry3D2hEE="
            alt="Green Pasture Ranch"
          />

          <p className="text-center text-md">
            Nestled in the heart of the countryside, Green Pasture Ranch specializes in organic, free-range farming. Our dedication to sustainable practices and animal welfare ensures premium quality produce. Experience the farm-to-table difference with our fresh, organic products.
          </p>

          <blockquote className="italic text-center">
            "Our commitment to eco-friendly farming and natural processes makes every product uniquely special." - Jane Doe, Farmer
          </blockquote>

          <Button variant="outlined" color="primary">
            View Photo Gallery
          </Button>

          <div className="text-center">
            <h3 className="text-lg font-semibold">Featured Products</h3>
            <ul className="list-disc">
              <li>Organic Free-Range Eggs</li>
              <li>Freshly Picked Vegetables</li>
              <li>Homemade Cheese and Dairy Products</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">What Our Customers Say</h3>
            <p>"I've never tasted fresher, more flavorful produce! The quality is unmatched." - Emily R.</p>
            <p>"Green Pasture Ranch's commitment to sustainability is truly inspiring." - Mark B.</p>
          </div>

          <Button variant="outlined" color="primary">
            Watch Our Farm Tour
          </Button>

        </Stack>
      </Box>

      <br>
      </br>
      <Box className="mx-60 py-4">
        <span><h2 className="text-xl font-bold text-center">Other Customers Also Bought</h2></span>
        <br></br> 
        
        <Stack direction="row" spacing={2}>
          <ProductPaper variant="elevation" elevation={2} >
            {/* Top portion  */}
            <Stack container spacing={1}>
              <Stack direction='row'>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img src={"https://img.thrivemarket.com/store/full/8/6/861555000125-1_1_1.jpg"} alt={`Product`} />
                  </Grid>
                  <Grid item xs={9} alignContent='left'>

                    <Stack spacing={1}>
                      <span >                  
                        <h3 className="text-sm font-bold text-left">Fourth & Heart, Grass Fed Ghee, Garlic</h3>
                        <h2 className="text-xs text-left">9 oz jar</h2>
                      </span>
                      <span >
                        <p className="text-xs font-bold text-left">$12.49</p>
                        <p className="text-xs text-left">-23%</p>
                      </span>
                    </Stack>
                  
                  </Grid>
                </Grid>
              </Stack> 
              {/* Bottom portion */}
              <Stack direction='row'>
                <Button size="sm" variant={'soft'} color="warning">
                  Add to Cart
                </Button>
              </Stack>
            </Stack> 
          </ProductPaper>

          <ProductPaper variant="elevation" elevation={2} >
            {/* Top portion  */}
            <Stack container spacing={1}>
              <Stack direction='row'>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img src={"https://img.thrivemarket.com/store/full/8/5/853104007747_1--_1_1.jpg?w=1260&jpg_quality=90"} alt={`Product`} />
                  </Grid>
                  <Grid item xs={9} alignContent='left'>

                    <Stack spacing={1}>
                      <span >                  
                        <h3 className="text-sm font-bold text-left">High Heat Original Ghee Oil Blend Spray</h3>
                        <h2 className="text-xs text-left">5 oz canister</h2>
                      </span>
                      <span >
                        <p className="text-xs font-bold text-left">$9.99</p>
                        <p className="text-xs text-left">-5%</p>
                      </span>
                    </Stack>
                  
                  </Grid>
                </Grid>
              </Stack> 
              {/* Bottom portion */}
              <Stack direction='row'>
                <Button size="sm" variant={'soft'} color="warning">
                  Add to Cart
                </Button>
              </Stack>
            </Stack> 
          </ProductPaper>

          <ProductPaper variant="elevation" elevation={2} >
            {/* Top portion  */}
            <Stack container spacing={1}>
              <Stack direction='row'>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img src={"https://img.thrivemarket.com/store/full/8/5/856166004006_front_1_1.jpg?w=1260&jpg_quality=90"} alt={`Product`} />
                  </Grid>
                  <Grid item xs={9} alignContent='left'>

                    <Stack spacing={1}>
                      <span >                  
                        <h3 className="text-sm font-bold text-left">Beef Tallow</h3>
                        <h2 className="text-xs text-left">14 oz jar</h2>
                      </span>
                      <span >
                        <p className="text-xs font-bold text-left">$14.99</p>
                        <p className="text-xs text-left">-14%</p>
                      </span>
                    </Stack>
                  
                  </Grid>
                </Grid>
              </Stack> 
              {/* Bottom portion */}
              <Stack direction='row'>
                <Button size="sm" variant={'soft'} color="warning">
                  Add to Cart
                </Button>
              </Stack>
            </Stack> 
          </ProductPaper>





        </Stack>      
      </Box>





    </div>


  );
}