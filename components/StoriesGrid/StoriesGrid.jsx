import { Arrow, StoriesGridContainer, StoryAuthor, StoryContainer, StoryLinkContainer, StoryTitle } from "./StoriesGrid.styles"

export const StoriesGrid = ({ extended }) => {
    return (
        <StoriesGridContainer>
            <StoryContainer desktopImage="/assets/stories/desktop/mountains.jpg" mobileImage="/assets/stories/mobile/mountains.jpg" alt="The Mountains">
                {extended && <StoryAuthor date>April 16th 2020</StoryAuthor>}
                <StoryTitle upperSpace={!extended}>The Mountains</StoryTitle>
                <StoryAuthor>by John Appleseed</StoryAuthor>
                <hr />
                <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                    READ STORY
                    <Arrow>&rarr;</Arrow>
                </StoryLinkContainer>
            </StoryContainer>
            <StoryContainer desktopImage="/assets/stories/desktop/cityscapes.jpg" mobileImage="/assets/stories/mobile/cityscapes.jpg" alt="Sunset Cityscapes">
                {extended && <StoryAuthor date>April 14th 2020</StoryAuthor>}
                <StoryTitle upperSpace={!extended}>Sunset Cityscapes</StoryTitle>
                <StoryAuthor>by Benjamin Cruz</StoryAuthor>
                <hr />
                <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                    READ STORY
                    <Arrow>&rarr;</Arrow>
                </StoryLinkContainer>
            </StoryContainer>
            <StoryContainer desktopImage="/assets/stories/desktop/18-days-voyage.jpg" mobileImage="/assets/stories/mobile/18-days-voyage.jpg" alt="18 Days Voyage">
                {extended && <StoryAuthor date>April 11th 2020</StoryAuthor>}
                <StoryTitle upperSpace={!extended}>18 Days Voyage</StoryTitle>
                <StoryAuthor>by Alexei Borodin</StoryAuthor>
                <hr />
                <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                    READ STORY
                    <Arrow>&rarr;</Arrow>
                </StoryLinkContainer>
            </StoryContainer>
            <StoryContainer desktopImage="/assets/stories/desktop/architecturals.jpg" mobileImage="/assets/stories/mobile/architecturals.jpg" alt="Architecturals">
                {extended && <StoryAuthor date>April 9th 2020</StoryAuthor>}
                <StoryTitle upperSpace={!extended}>Architecturals</StoryTitle>
                <StoryAuthor>by Samantha Brooke</StoryAuthor>
                <hr />
                <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                    READ STORY
                    <Arrow>&rarr;</Arrow>
                </StoryLinkContainer>
            </StoryContainer>
            {
                extended && <>
                    <StoryContainer desktopImage="/assets/stories/desktop/world-tour.jpg" mobileImage="/assets/stories/mobile/world-tour.jpg">
                        {extended && <StoryAuthor date>April 7th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>World Tour 2019</StoryTitle>
                        <StoryAuthor>by Timothy Wagner</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/unforeseen-corners.jpg" mobileImage="/assets/stories/mobile/unforeseen-corners.jpg">
                        {extended && <StoryAuthor date>April 3rd 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Unforeseen Corners</StoryTitle>
                        <StoryAuthor>by William Malcolm</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/king-on-africa.jpg" mobileImage="/assets/stories/mobile/king-on-africa.jpg">
                        {extended && <StoryAuthor date>March 29th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>King on Africa: Part II</StoryTitle>
                        <StoryAuthor>by Tim Hillenburg</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/trip-to-nowhere.jpg" mobileImage="/assets/stories/mobile/trip-to-nowhere.jpg">
                        {extended && <StoryAuthor date>March 21st 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>The Trip to Nowhere</StoryTitle>
                        <StoryAuthor>by Felicia Rourke</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/rage-of-the-sea.jpg" mobileImage="/assets/stories/mobile/rage-of-the-sea.jpg">
                        {extended && <StoryAuthor date>March 19th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Rage of The Sea</StoryTitle>
                        <StoryAuthor>by Mohammed Abdul</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/running-free.jpg" mobileImage="/assets/stories/mobile/running-free.jpg">
                        {extended && <StoryAuthor date>March 16th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Running Free</StoryTitle>
                        <StoryAuthor>by Michelle</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/behind-the-waves.jpg" mobileImage="/assets/stories/mobile/behind-the-waves.jpg">
                        {extended && <StoryAuthor date>March 11th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Behind the Waves</StoryTitle>
                        <StoryAuthor>by Lamarr Wilson</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/calm-waters.jpg" mobileImage="/assets/stories/mobile/calm-waters.jpg">
                        {extended && <StoryAuthor date>March 9th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Calm Waters</StoryTitle>
                        <StoryAuthor>by Samantha Brooke</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/milky-way.jpg" mobileImage="/assets/stories/mobile/milky-way.jpg">
                        {extended && <StoryAuthor date>March 5th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>The Milky Way</StoryTitle>
                        <StoryAuthor>by Benjamin Cruz</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/dark-forest.jpg" mobileImage="/assets/stories/mobile/dark-forest.jpg">
                        {extended && <StoryAuthor date>March 4th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Night at The Dark Forest</StoryTitle>
                        <StoryAuthor>by Mohammed Abdul</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/somwarpet.jpg" mobileImage="/assets/stories/mobile/somwarpet.jpg">
                        {extended && <StoryAuthor date>March 1st 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Somwarpet’s Beauty</StoryTitle>
                        <StoryAuthor>by Michelle</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                    <StoryContainer desktopImage="/assets/stories/desktop/land-of-dreams.jpg" mobileImage="/assets/stories/mobile/land-of-dreams.jpg">
                        {extended && <StoryAuthor date>February 25th 2020</StoryAuthor>}
                        <StoryTitle upperSpace={!extended}>Land of Dreams</StoryTitle>
                        <StoryAuthor>by William Malcolm</StoryAuthor>
                        <hr />
                        <StoryLinkContainer onClick={() => window.location.href = 'https://carlosshb.com'}> 
                            READ STORY
                            <Arrow>&rarr;</Arrow>
                        </StoryLinkContainer>
                    </StoryContainer>
                </>
            }
        </StoriesGridContainer>

    )
}