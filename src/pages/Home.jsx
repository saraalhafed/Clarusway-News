import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { getNews ,clearnews} from "../store/newsSlice";
//import { red } from '@mui/material/colors';
//const secondary = red["500"];
export default function Home() {
  const dispatch = useDispatch(); /* with dispatch we fire the action inside the news reducer  */
  // we are going to display the error if it exists and the loading and the news
  const { news, error, loading } = useSelector((state) => state.news);/* we get the state from news reducer */

  // this is a hook in react we use at the start of the application especially to perform fetching an api
  useEffect(() => {
    dispatch(getNews());
    // when u walk away from that page , news are cleared

    // life cycle of a component
    // 1. Mounting (initial render) (component is added to the DOM)
    // in class components we use componentDidMount
    // useEffect with [] as a second argument is equivalent to componentDidMount
    // 2. Updating  (re-render)
    // in class components we use componentDidUpdate
    // useEffect with [state] as a second argument is equivalent to componentDidUpdate
    // 3. Unmounting  (component is removed from the DOM)
    // in class components we use componentWillUnmount
    // useEffect with return function is equivalent to componentWillUnmount

    // for functional components we use useEffect to handle all the life cycle methods
    return () => {
      // clean up function  : end lifecercile of the component, to stop this function (getNews)
      dispatch(clearnews());  /* i dont want this component any more , i can provide it for Reciepe and movie app */
    };                /* return part is reqiuerd like:(timer, stop the counter ) */
  }, []);
  return (
    <>
      <Typography variant="h1" component="h1" color="secondary"   style={{ textAlign: "center" }}>  {/*  */}
        News
      </Typography>
      {loading && (         /*  */
        <Box display="flex" alignItems="center" justfiyContent="center">
          <img src={loadingGif} />
        </Box>
      )}

      {/* --error case--- */}
       {error && <Typography variant="h2">{error}</Typography>}

       {/* ---news container-- */}
       <Box
   
   xs={{ d: 'flex' }}
   display="flex"
   alignItems="center"
   justifyContent="space-evenly"
   flexWrap="wrap"
      > 
     {
        news?.map((item,index)=>(<Card sx={{maxWidth:345,m:5,maxHeight:600,boxShadow:"0px 4px 12px rgba(0,0,0.5"}} key={index}>
          <CardMedia /* for the img */
              component="img"
              height="250"
              image={              /* if ther is img give me it if not return default img */
                item?.urlToImage ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosMm4I13FJmm7-nYRYYeBnE8lfBhv_ErMlQ&s"
              }
              alt="image"
            />      {/* /* null is the img in api , so we copy the image adress */ }
      <CardContent>
              <Typography variant="h5">{item?.title.slice(0, 50)}</Typography>  {/*,title is long :slice  to look  good */}
              <Typography variant="body2">{item?.content}</Typography>
              <Typography>{item?.publishedAt}</Typography>{/* for get time inside the item  from api */}
            </CardContent>
            <CardActions >
            <div   style={{  /* inline css style */
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  width: '100%',
                }} >
            
           
              <Button size="small" >Share</Button>
              <Button size="small" href={item?.url} > {/* url from api  to go to this link*/}
                Details
              </Button>
              </div>
              
            </CardActions>
         

          </Card>
          
          

      ))}
      </Box>
    </>
  );
}
