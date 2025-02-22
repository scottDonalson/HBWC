package rocks.hbwc.hbwc_spring_react.services;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import rocks.hbwc.hbwc_spring_react.data.entities.CoachEntity;
import rocks.hbwc.hbwc_spring_react.data.repositories.CoachRepository;
import rocks.hbwc.hbwc_spring_react.web.errors.NotFoundException;
import rocks.hbwc.hbwc_spring_react.web.models.Coach;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author ksdon
 **/

@Service
public class CoachService {
    private final CoachRepository coachRepository;

    public CoachService(CoachRepository coachRepository) {
        this.coachRepository = coachRepository;
    }

    public List<Coach> getAllCoaches(String filterEmail){
        List<Coach> coaches = new ArrayList<>();
        if(StringUtils.hasLength(filterEmail)){
            CoachEntity entity = this.coachRepository.findByEmail(filterEmail);
            coaches.add(this.translateDbToWeb(entity));
        } else {
            Iterable<CoachEntity> entities = this.coachRepository.findAll();
            entities.forEach(entity->{
                coaches.add(this.translateDbToWeb(entity));
            });
        }
        return coaches;
    }


    public Coach getCoach(long coach_id) {
        Optional<CoachEntity> optional = this.coachRepository.findById(coach_id);
        if(optional.isEmpty()){
            throw new NotFoundException("wrestler not found with id");
        }
        return this.translateDbToWeb(optional.get());
    }

    public Coach createOrUpdate(Coach coach){
        CoachEntity entity = this.translateWebToDb(coach);
        entity = this.coachRepository.save(entity);
        return this.translateDbToWeb(entity);
    }

    public void deleteCoach(long coach_id) {
        this.coachRepository.deleteById(coach_id);
    }

    private CoachEntity translateWebToDb(Coach coach) {
        CoachEntity entity = new CoachEntity();
        entity.setCoach_id(coach.getCoach_id());
        entity.setFirst_name(coach.getFirst_name());
        entity.setLast_name(coach.getLast_name());
        entity.setEmail(coach.getEmail());
        entity.setGender(coach.getGender());
        entity.setPhone_number(coach.getPhone_number());
        entity.setUsa_number(coach.getUsa_number());
        return entity;
    }


    private Coach translateDbToWeb(CoachEntity entity) {
        return new Coach(
                entity.getCoach_id(),
                entity.getFirst_name(),
                entity.getLast_name(),
                entity.getUsa_number(),
                entity.getGender(),
                entity.getEmail(),
                entity.getPhone_number());

    }
}
