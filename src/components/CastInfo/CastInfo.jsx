import { ActorPhoto, CastListItem, ActorName, ActorCharacter } from "./CastInfo.styled";

export const CastInfo = ({ actor }) => {
    let photo;

    if (actor.profile_path) {
        photo = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    } else {
        photo = 'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif';
    };

    return (
        <CastListItem>
            <ActorPhoto src={photo} alt={actor.name} loading='lazy' onerror="onerror=null;src='https://hope.be/wp-content/uploads/2015/05/no-user-image.gif'" />
            <ActorName>{actor.name}</ActorName>
            <ActorCharacter>Character: {actor.character}</ActorCharacter>
        </CastListItem>
    );
};