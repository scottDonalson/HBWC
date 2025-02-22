package rocks.hbwc.hbwc_spring_react.data.repositories;

import org.springframework.data.repository.CrudRepository;
import rocks.hbwc.hbwc_spring_react.data.entities.CoachEntity;

/**
 * @author ksdon
 **/
public interface CoachRepository extends CrudRepository<CoachEntity, Long> {
    CoachEntity findByEmail(String email);
}
