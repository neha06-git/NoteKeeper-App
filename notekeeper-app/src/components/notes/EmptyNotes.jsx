
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Typography, Box, styled } from '@mui/material';

const Description = styled(DescriptionOutlinedIcon)`
    font-size: 120px;
    color: #F5F5F5;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh
`

const EmptyNotes = () => {
    return (
        <Container>
            <Description />
            <Text>Notes you add appear here</Text>
        </Container>
    )
}

export default EmptyNotes;