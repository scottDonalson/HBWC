package rocks.hbwc.hbwc_spring_react.data.repositories;

import org.springframework.data.repository.CrudRepository;
import rocks.hbwc.hbwc_spring_react.data.entities.ParentEntity;

/**
 * @author ksdon
 **/
public interface ParentRepository extends CrudRepository<ParentEntity, Long> {
    ParentEntity findByEmail(String email);
}
